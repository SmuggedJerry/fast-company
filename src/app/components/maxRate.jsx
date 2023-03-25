import React, { useState } from "react";
import api from "../api";

const MaxRate = () => {
  const [users] = useState(api.users.fetchAll());
  const maxRate = Math.max(...users.map((user) => user.rate));
  return <span>{maxRate}</span>;
};

export default MaxRate;
