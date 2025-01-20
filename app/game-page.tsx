import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, Image } from 'react-native';
import { useRouter, useGlobalSearchParams } from "expo-router";
import Layout from "@/components/Layout";
import RoundIcon from "@/components/RoundIcon";
import Button from "@/components/Button";

const initialBoard = Array(9).fill(null);

export default function GamePage() {
    const [board, setBoard] = useState(initialBoard);
    const [currentPlayer, setCurrentPlayer] = useState('X');
    const [winner, setWinner] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);

    const router = useRouter();
    const { mode } = useGlobalSearchParams();

    useEffect(() => {
        if (mode === 'single' && currentPlayer === 'O' && !winner) {
            const timeout = setTimeout(() => {
                makeComputerMove();
            }, 500);
            return () => clearTimeout(timeout);
        }
    }, [currentPlayer, winner, mode]);

    useEffect(() => {
        if (winner) {
            setModalVisible(true);
        }
    }, [winner]);

    const handlePress = (index: any) => {
        if (board[index] || winner) return;

        const newBoard = board.slice();
        newBoard[index] = currentPlayer;
        setBoard(newBoard);

        const newWinner = calculateWinner(newBoard);
        if (newWinner) {
            setWinner(newWinner);
        } else {
            setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
        }
    };

    const makeComputerMove = () => {
        const bestMove = findBestMove(board);
        handlePress(bestMove);
    };

    const findBestMove = (board: any[]) => {
        let bestVal = -Infinity;
        let bestMove = -1;

        for (let i = 0; i < board.length; i++) {
            if (board[i] === null) {
                board[i] = 'O';
                let moveVal = minimax(board, 0, false);
                board[i] = null;

                if (moveVal > bestVal) {
                    bestMove = i;
                    bestVal = moveVal;
                }
            }
        }

        return bestMove;
    };

    const minimax = (board: any[], depth: number, isMax: boolean) => {
        const score = evaluate(board);

        if (score === 10) return score - depth;
        if (score === -10) return score + depth;
        if (board.every(cell => cell !== null)) return 0;

        if (isMax) {
            let best = -Infinity;

            for (let i = 0; i < board.length; i++) {
                if (board[i] === null) {
                    board[i] = 'O';
                    best = Math.max(best, minimax(board, depth + 1, !isMax));
                    board[i] = null;
                }
            }

            return best;
        } else {
            let best = Infinity;

            for (let i = 0; i < board.length; i++) {
                if (board[i] === null) {
                    board[i] = 'X';
                    best = Math.min(best, minimax(board, depth + 1, !isMax));
                    board[i] = null;
                }
            }

            return best;
        }
    };

    const evaluate = (board: any[]) => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                return board[a] === 'O' ? 10 : -10;
            }
        }

        return 0;
    };

    const calculateWinner = (board: any) => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                return board[a];
            }
        }

        return board.every((cell: any) => cell) ? 'Draw' : null;
    };

    const renderIcon = (value: any) => {
        if (value === 'X') {
            return <RoundIcon icon={require('../assets/images/game-page/x.png')} background={styles.box} />;
        } else if (value === 'O') {
            return <RoundIcon icon={require('../assets/images/game-page/o.png')} background={styles.box} />;
        } else {
            return <RoundIcon icon={''} background={styles.box} />;
        }
    };

    const resetGame = () => {
        setBoard(initialBoard);
        setCurrentPlayer('X');
        setWinner(null);
        setModalVisible(false);
    };

    return (
        <Layout>
            <View style={styles.iconContainer}>
                <RoundIcon icon={require('../assets/images/game-page/x.png')} background={styles.bigIcon} text='Player One' />
                <Text style={styles.text}>0</Text>
                <Text style={styles.text}>:</Text>
                <Text style={styles.text}>0</Text>
                <RoundIcon icon={require('../assets/images/game-page/o.png')} background={styles.bigIcon} text='Player Two' />
            </View>
            <View style={styles.gameBoard}>
                {board.map((value, index) => (
                    <TouchableOpacity key={index} onPress={() => handlePress(index)}>
                        {renderIcon(value)}
                    </TouchableOpacity>
                ))}
            </View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.winnerText}>
                            {winner === 'Draw' ? "Draw" : winner === 'X' ? "Player One Win!" : "Player Two Win!"}
                        </Text>
                        {winner === 'Draw' ? (
                            <RoundIcon
                                icon={require('../assets/images/game-page/draw.png')}
                                background={styles.popup}
                            />
                        ) : (
                            <Image
                                source={require('../assets/images/game-page/trophy.png')}
                                style={styles.image}
                            />
                        )}
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '70%', marginTop: 40 }}>
                            <Button title="Back" onPress={() => { setModalVisible(false); router.push('/select-game'); }} backgroundStyle={styles.button} textStyle={styles.buttonText} />
                            <Button title="Play Again" onPress={resetGame} backgroundStyle={styles.button} textStyle={styles.buttonText} />
                        </View>
                    </View>
                </View>
            </Modal>
        </Layout>
    );
}

const styles = StyleSheet.create({
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 50,
        width: '90%',
    },
    bigIcon: {
        backgroundColor: '#391898',
        width: 92,
        height: 94
    },
    text: {
        color: 'white',
        fontSize: 12,
    },
    gameBoard: {
        backgroundColor: '#391898',
        width: 280,
        height: 315,
        marginTop: 100,
        borderRadius: 20,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
    },
    box: {
        backgroundColor: '#C4C4C4',
        width: 70,
        height: 70,
        margin: 15,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: 280,
        height: 260,
        padding: 20,
        backgroundColor: '#391898',
        borderRadius: 10,
        alignItems: 'center',
    },
    winnerText: {
        marginBottom: 40,
        fontSize: 24,
        fontWeight: 700,
        color: 'white',
    },
    button: {
        width: 70,
        height: 30,
        borderRadius: 20,
        backgroundColor: '#F90',
    },
    buttonText: {
        fontSize: 11
    },
    image: {
        width: 80,
        height: 80,
    },
    popup: {
        backgroundColor: '#4C8BD4',
        width: 90,
        height: 90,
        borderRadius: 50,
    }
});
