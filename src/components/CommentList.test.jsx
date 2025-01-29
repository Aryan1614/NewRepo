import { render, screen } from "@testing-library/react";
import CommentList from "./CommentList"

test("should show empty text when comments are not available",()=>{
    render(<CommentList commentlist={[]} />);
    const emptyHeading = screen.getByTestId("empty");
    expect(emptyHeading).toBeInTheDocument();
});

test("should render all the comments when available",()=>{
    const comments = [
        {
            id:1,
            comment: "First Commit",
        },
        {
            id: 2,
            comment: "Second Commit",
        }
    ];
    render(<CommentList commentlist={comments} />);
    const emptyEle = screen.queryByTestId("empty",{exact: false});
    expect(emptyEle).not.toBeInTheDocument();

    const commentLi = screen.queryAllByRole("listitem");
    expect(commentLi.length).toBe(comments.length);
});