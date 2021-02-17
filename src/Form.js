
import styled from 'styled-components'

import PropTypes from 'prop-types'



export default function Form({ headline, onCreateShoppingItem }) {

    function handleSubmit(event) {
        event.preventDefault(event)
        const form = event.target
        const input = form.title
        onCreateShoppingItem(input.value)
        form.reset()
        input.focus()
    }

    return (
        <ShoppingForm onSubmit={handleSubmit}>
            <H3>{headline}</H3>
            <input name="title" type="text" placeholder="Write your ShoppingList" />
            <MyButton>Add Item</MyButton>
        </ShoppingForm>
    )
}

Form.propTypes = {
    headline: PropTypes.string,
    onCreateShoppingItem: PropTypes.func
}



const ShoppingForm = styled.form`
    display: grid;
    grid-template-columns: 1;
    grid-template-rows: auto;
    grid-gap: 1rem;
    margin: 2rem 0rem;
    padding: 20px;
`

const MyButton = styled.button`
    border: none;
    background-color: indigo;
    color: lightcyan;
    padding: 0.8rem;
`

const H3 = styled.h3`
    color: grey
`
