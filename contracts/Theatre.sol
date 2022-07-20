// SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;

contract DTheatre{
    address public owner;
    uint public constant baseFees= 1000 wei;
    uint movieId;

    constructor(){
        owner= msg.sender;
    }
    // first make movie display 
    struct MovieDisplay{
        uint id;
        uint price;
        string movieName;
        uint remainingSeats;
        bool isComplete;
    }
    // event eventMovieDisplay
    struct TicketBook{
        address owner;
        uint seatNumber;
        uint movieId;
        string movieName;
        uint seatType;
        uint price;

    }
    enum Type{
        PRIME,
        CLASSIC_PLUS,
        CLASSIC
    }
    mapping(uint=>MovieDisplay) public movies;
    mapping(address=>TicketBook) public tickets;

    function addMovie(uint _price,string calldata _name,uint _remaining) public payable isOwner returns(bool){
        require(msg.value==baseFees,"Please Provide sufficient Money");
        movieId++;
        movies[movieId]= MovieDisplay(movieId,_price,_name,_remaining,true);
        return true;
        
    }
    function bookTicket(uint _id, uint _row , uint _col,uint _type) public payable checkSeatIsAvailable(_id) returns(bool){
        uint _seatNumber= _row * _col;
        uint price;
        Type _ticketType= Type.PRIME;
        price= 280;
        if(_type==2){
            _ticketType=Type.CLASSIC_PLUS;
            price=180 wei;
        }
        if(_type==3){
            _ticketType=Type.CLASSIC;
            price= 150 wei;
        }
        MovieDisplay storage movie = movies[_id];
        require(msg.value==price,"Please give sufficient Amount");
        tickets[msg.sender]= TicketBook(msg.sender,_seatNumber,_id,movie.movieName,_type,price);

        movie.remainingSeats--;
        return true;
    }

    function cancelTicket() public payable returns(bool){
        TicketBook storage ticket= tickets[msg.sender];
        require(ticket.movieId>0,"Ticket Not Exist");
        uint _id= ticket.movieId;
        MovieDisplay storage movie = movies[_id];
        movie.remainingSeats++;
        delete tickets[msg.sender];
        payable(ticket.owner).transfer(ticket.price);// 40 wei is the deduction amount of cancellation 
        return true;
    }
    function getBal() view public returns(uint){
        return address(this).balance;
    }
    // Modifiers For theatre Functions 
    modifier isOwner(){
        require(msg.sender==owner,"You are not the owner");
        _;
    }
    modifier checkSeatIsAvailable(uint _id){
        MovieDisplay storage movie = movies[_id];
        require(movie.remainingSeats!=0,"No Seats Are Remaining for this movie");
        _;
    }
}