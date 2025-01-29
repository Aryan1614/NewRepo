import { render,screen } from "@testing-library/react"
import App from "./App"
import userEvent from "@testing-library/user-event";


test("comment should be displayed after submitting",async()=>{
    render(<App/>);
    const commentInput = screen.getByPlaceholderText("Enter Comment here",{exact: false});
    const commentCheck = screen.getByLabelText("i agree to terms and conditions",{exact: false});
    const commentBtnEle = screen.getByRole("button",{name: "comment",exact: false});

    await userEvent.type(commentInput,"third commit");
    await userEvent.click(commentCheck);
    await userEvent.click(commentBtnEle);

    const newComment = screen.getByText("third commit",{exact: false});
    expect(newComment).toBeInTheDocument();
}); 

test("2 comments gets displayed after submitting",async()=>{
    render(<App/>);
    const commentInput = screen.getByPlaceholderText("Enter Comment here",{exact: false});
    const commentCheck = screen.getByLabelText("i agree to terms and conditions",{exact: false});
    const commentBtnEle = screen.getByRole("button",{name: "comment",exact: false});

    await userEvent.type(commentInput,"third commit");
    await userEvent.click(commentCheck);
    await userEvent.click(commentBtnEle);

    expect(commentInput.value).toEqual("");
    expect(commentCheck).not.toBeChecked();

    await userEvent.type(commentInput,"fourth commit");
    await userEvent.click(commentCheck);
    await userEvent.click(commentBtnEle);

    // first way :

    // const thirdComment = screen.getByText("third commit",{exact: false});
    // const fourthcomment = screen.getByText("fouth commit",{exact: false});
    // expect(thirdComment,fourthcomment).toBeInTheDocument();

    // second way :
    const allListsItems = screen.getAllByRole("listitem");
    expect(allListsItems.length).toBe(2);
}); 