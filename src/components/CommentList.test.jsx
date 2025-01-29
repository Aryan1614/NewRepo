import { render, screen } from "@testing-library/react";
import CommentList from "./CommentList"


test("comments are not available",()=>{
    render(<CommentList commentlist={[]} />);
    const emptyHeading = screen.getByTestId("empty");
    expect(emptyHeading).toBeInTheDocument();
});

test("list all comments ",()=>{
    render(<CommentList commentlist={["aryan","more"]} />);
    const emptyHeading = screen.queryByTestId("empty");
    expect(emptyHeading).toBeNull();
    
})