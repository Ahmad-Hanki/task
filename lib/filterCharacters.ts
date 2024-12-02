const filterCharacters = (
    data: Array<any> | null,
    gender: string | null,
    status: string | null
  ): Array<any> => {
    if (!data) return []; 
    
    return data.filter((character) => {
      const isGenderMatch = gender ? character.gender === gender : true;
      const isStatusMatch = status ? character.status === status : true;
  
      return isGenderMatch && isStatusMatch;
    });
  };
  
  export default filterCharacters;
  