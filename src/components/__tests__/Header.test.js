import { Provider } from "react-redux"
import Header from "../Header"
import { fireEvent, render, screen } from "@testing-library/react"
import appStore from "../../utils/appStore"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"


test("it shoul test heder",()=>{
    render(
        <BrowserRouter>
    <Provider store={appStore}>

<Header/>
    </Provider>
    </BrowserRouter>
  )

  const loginButton =screen.getByRole('button')

  expect(loginButton).toBeInTheDocument();

})

test("change login to logout",()=>{
    render(
        <BrowserRouter>
    <Provider store={appStore}>

<Header/>
    </Provider>
    </BrowserRouter>
  )

  const loginButton =screen.getByRole('button',{name:"login"});
  fireEvent.click(loginButton)

  const logoutButton =screen.getByRole('button',{name:"logout"});

  expect(logoutButton).toBeInTheDocument();

})


