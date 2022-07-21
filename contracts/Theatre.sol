// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Cinema{
    address public owner;
    constructor(){
        owner=msg.sender;
    }
    enum Type{
        PRIME,CLASSIC_PLUS,CLASSIC
    }
    struct MovieTickets{
        address owner;
        uint seatNumber;
        uint movieId;
        string movieName;
        uint seatType;
        uint price;
    }
    mapping(address=>MovieTickets[]) public userToTickets;
    mapping(uint=>uint[]) public seatsBooked;
    function bookTicket(uint id , uint bookId,uint _type,string memory _movieName) public payable alreadyBooked(bookId,id) returns(bool){
        uint price;
        
        if(_type==2){
           
            price=180 wei;
        }
        else if(_type==3){
            
            price= 150 wei;
        }else{
            price=280 wei;
        }
        require(price==msg.value,"Please Provide Sufficient Balance");
        userToTickets[msg.sender].push(MovieTickets(msg.sender,bookId,id,_movieName,_type,price));
        seatsBooked[id].push(bookId);
        return true;
   }
    function returnAllBooksIds(uint id) view public returns(uint[] memory){
       return seatsBooked[id];
   }

   modifier alreadyBooked(uint bookId,uint id){
       uint[] memory ids= seatsBooked[id];

       bool flag=false;

       for(uint i=0;i<ids.length;i++){
           if(ids[i]==bookId){
               flag=true;
               return;
           }
       } 
       require(flag==false,"Alread Booked");
       _;
   }
}