import React from "react";

const commentsData = [
  {
    name: "Bhavya",
    id: 1,
    text: "Great course to learn React",
    replies: [
      {
        name: "Bhavya",
        id: 1,
        text: "Great course to learn React",
        replies: [
          {
            name: "Bhavya",
            id: 2,
            text: "Great course to learn React",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Bindu",
    id: 2,
    text: "Awesome content",
    replies: [
      {
        name: "Bindu",
        id: 1,
        text: "Great course to learn React",
        replies: [
          {
            name: "Bindu",
            id: 1,
            text: "Great course to learn React",
            replies: [],
          },
        ],
      },
      {
        name: "Bindu",
        id: 2,
        text: "Great course to learn React",
        replies: [],
      },
    ],
  },
  {
    name: "Lalitha",
    id: 3,
    text: "Great course to learn React",
    replies: [
      {
        name: "Lalitha",
        id: 1,
        text: "Great course to learn React",
        replies: [
          {
            name: "Bhavya",
            id: 1,
            text: "Great course to learn React",
            replies: [],
          },
        ],
      },
    ],
  },
];

const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="flex">
      <img
        className="w-10 h-10"
        alt="user-icon"
        src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"
      />
      <div className="flex flex-col py-1">
        <span className="font-bold">{name}</span>
        <span>{text}</span>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment) => (
    <div>
      <Comment key={comment.id} data={comment} />
      <div className="border border-gray-300 pl-5">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="p-2">
      {/* To do recursion, we will move below logic to new component (CommentsList) */}
      {/* {commentsData.map((comment) => (
        <Comment data={comment}/>
      ))} */}
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
