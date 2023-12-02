const capitalize = (sentence: string) => {
  const wordList = sentence.split(" ");
  let new_list = [];
  for (let word of wordList) {
    new_list.push(word.charAt(0).toUpperCase() + word.slice(1));
  }
  return new_list.join(" ");
};

export { capitalize };
