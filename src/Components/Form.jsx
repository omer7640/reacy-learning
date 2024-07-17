import React, { useState } from "react";

export default function Form() {
  const [user, setUser] = useState(" ");
  // console.log(user);
  const [comment, setComment] = useState(" ");
  const [option, setOption] = useState("React");
  function handleSubmit(e) {
    e.preventDefault();
    alert(`${user} ${comment} ${option}`);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>username</label>
        <input
          type="text"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <label>Comments</label>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <label>Topic</label>
        <select value={option} onChange={(e) => setOption(e.target.value)}>
          <option value="React">React</option>
          <option value="Vue">Vue</option>
          <option value="Angular">Angular</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
