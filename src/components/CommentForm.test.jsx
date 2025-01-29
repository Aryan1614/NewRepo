import { fireEvent, render, screen } from "@testing-library/react"
import CommentForm from "./CommentForm"


test("Comment Form Data Should Be rendered Properly",()=>{
    render(<CommentForm />);
    const headingEle = screen.getByTestId("heading");
    expect(headingEle).toBeInTheDocument();
    const commentInput = screen.getByPlaceholderText("enter comment here",{exact: false});
    expect(commentInput).toBeInTheDocument();
    const commentButton = screen.getByRole("button",{name: "comment",exact: false});
    expect(commentButton).toBeInTheDocument();
    const commentCheck = screen.getByLabelText("i agree to terms and conditions",{exact: false});
    expect(commentCheck).toBeInTheDocument();
});

test("Initials of comment form",() => {
    render(<CommentForm />)
    const commentInput = screen.getByPlaceholderText("Enter Comment here",{exact: false});
    const commentCheck = screen.getByLabelText("i agree to terms and conditions",{exact: false});
    const commentBtnEle = screen.getByRole("button",{name: "comment",exact: false});

    expect(commentBtnEle).toBeDisabled();
    fireEvent.click(commentCheck);
    expect(commentBtnEle).toBeDisabled();
    fireEvent.change(commentInput,{target:{value: "abc"}});
    expect(commentBtnEle).toBeEnabled();
})

