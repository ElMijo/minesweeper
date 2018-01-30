# -*- coding: utf-8 -*-
'''
********************
sonic.server.helpers
********************
Modulo con clases y funciones utiles para todos.
'''

class Board(object):
    """docstring for Board."""
    def __init__(self, rows, cols, mines):

        try:
            self.__rows = int(rows)
            self.__cols = int(cols)
            self.__mines = int(mines)
        except ValueError:
            raise

        self.__board = None

    def __generate_base_board(self):
        self.__borad = [[0] * self.__rows] *  self.__cols

    def generate(self):
        self.__generate_base_board()
