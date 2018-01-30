# -*- coding: utf-8 -*-
'''
********************
sonic.server.helpers
********************
Modulo con clases y funciones utiles para todos.
'''
from random import randint

class Board(object):
    """docstring for Board."""
    def __init__(self, rows, cols, mines):
        try:
            self.__rows = int(rows)
            self.__cols = int(cols)
            self.__mines = int(mines)
        except ValueError:
            raise

        self.__board = []

    def __ramdom_coordinates(self):
        return randint(0, self.__rows -1 ), randint(0, self.__cols -1 )

    def __generate_base_board(self):
        for x in range(self.__rows):
            self.__board.append([0] * self.__cols)

    def __add_mines(self):
        added_mines = 0
        while added_mines < self.__mines:
            row, col = self.__ramdom_coordinates()
            if self.__board[row][col] != '*':
                self.__board[row][col] = '*'
                added_mines = added_mines + 1

    def generate(self):
        self.__generate_base_board()
        self.__add_mines()
        return self.__board
