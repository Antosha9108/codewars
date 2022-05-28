function friend(friends){
    let newFriends = friends.map((word) => {
      if (word.length ==4){
          return word
      }
    })
      return newFriends.filter(item=>item!== undefined)
   }