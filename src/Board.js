import { Rook , Bishop , Pawn ,  Queen , King , Knight , Position} from "./Peices.js"

export default class Board{
    constructor() {
        this.board = [
            [new Rook(new Position('a', 1) , 'W') ,
            new Knight(new Position('a', 1) , 'W') ,
            new Bishop(new Position('c', 1) , 'W'),
             new Queen(new Position('d', 1) , 'W'),
             new King(new Position('e', 1) , 'W'),
             new Bishop(new Position('f', 1) , 'W'),
             new Knight(new Position('g', 1) , 'W'),
             new Rook(new Position('h', 1) , 'W')],
            [new Pawn(new Position('a' , 2) , 'W'),
             new Pawn(new Position('b' , 2) , 'W'),
             new Pawn(new Position('c' , 2) , 'W') ,
             new Pawn(new Position('d' , 2) , 'W'),
             new Pawn(new Position('e' , 2) , 'W'), 
             new Pawn(new Position('f' , 2) , 'W'),
             new Pawn(new Position('g' , 2) , 'W'),
             new Pawn(new Position('h' , 2) , 'W')],
            [ '',    ''  ,    ''  ,     '' ,     '',     '' ,    ''  ,   ''],
            [  '' ,  ''    ,  ''    ,  ''    , ''    ,    ''  ,  ''    , ''],
            [  '' ,  ''    ,  ''    ,   ''   ,  ''   ,  ''    ,  ''    ,  ''],
            [  ''  ,  ''    , ''     ,   ''   ,  ''   ,  ''    , ''     , ''],
            [new Pawn(new Position('a' , 7) , 'B'),
            new Pawn(new Position('b' , 7) , 'B'),
            new Pawn(new Position('c' , 7) , 'B') ,
            new Pawn(new Position('d' , 7) , 'B'),
            new Pawn(new Position('e' , 7) , 'B'), 
            new Pawn(new Position('f' , 7) , 'B'),
            new Pawn(new Position('g' , 7) , 'B'),
            new Pawn(new Position('h' , 7) , 'B')],
            [new Rook(new Position('a', 1) , 'W') ,
            new Knight(new Position('a', 8) , 'B') ,
            new Bishop(new Position('c', 8) , 'B'),
            new Queen(new Position('d', 8) , 'B'),
            new King(new Position('e', 8) , 'B'),
            new Bishop(new Position('f', 8) , 'B'),
            new Knight(new Position('g', 8) , 'B'),
            new Rook(new Position('h', 8) , 'B')]
        ]
    }

    showBoard(){ 
        console.log(this.board)
    };
}

