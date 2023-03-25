import React from "react";

const SearchStatus = ({ length }) => {
  const renderPhrase = (count) => {
    const forms = ["человек тусанёт", "человека тусанут", "человек тусанут"];
    const index =
      count === 0
        ? -1
        : count % 10 === 1 && count % 100 !== 11
        ? 0
        : count % 10 >= 2 &&
          count % 10 <= 4 &&
          (count % 100 < 10 || count % 100 >= 20)
        ? 1
        : 2;
    const phrase =
      count === 0
        ? "Никто с тобой не тусанет"
        : `${count} ${forms[index]} с тобой сегодня`;

    return (
      <h1>
        <span className={getBadgeClasses(count)}>{phrase}</span>
      </h1>
    );
  };

  const getBadgeClasses = (count) => {
    let classes = "badge ";
    classes += count === 0 ? "bg-danger" : "bg-primary";
    return classes;
  };

  return renderPhrase(length);
};

export default SearchStatus;
