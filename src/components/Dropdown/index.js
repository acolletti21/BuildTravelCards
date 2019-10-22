import React, {Component} from 'react'
import Trips from '../Trips'
// import FontAwesome from 'react-fontawesome'
var current = ''

class Dropdown extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listOpen: false,
            headerTitle: this.props.title
        }
        this.close = this.close.bind(this)
    }

    componentDidUpdate() {
        const {listOpen} = this.state
        setTimeout(() => {
            if (listOpen) {
                window.addEventListener('click', this.close)
            } else {
                window.removeEventListener('click', this.close)
            }
        }, 0)
    }

    componentWillUnmount() {
        window.removeEventListener('click', this.close)
    }

    close(timeOut) {
        this.setState({
            listOpen: false
        })
    }

    selectItem(item) {
        this.setState(
            {
                headerTitle: item,
                listOpen: false,
            }
        )
        current = item
        console.log(current)
    }

    selectedItem() {
        return current
        console.log(current)
    }

    toggleList() {
        this.setState(prevState => ({
            listOpen: !prevState.listOpen
        }))
    }

    render() {
        const {list} = this.props
        const {whenClicked, item} = this.props
        const {listOpen, headerTitle, key} = this.state
        return (
            <div className="dd-wrapper">
                <div className="dd-header" onClick={() => {this.toggleList()}}>
                    <div className="dd-header-title">{headerTitle}</div>
                    {listOpen ? (
                        // <FontAwesome name="angle-up" size="2x" />
                        <span>^</span>
                    ) : (
                        // <FontAwesome name="angle-down" size="2x" />
                        <span>v</span>
                    )}
                </div>
                {listOpen && (
                    <ul className="dd-list" onClick={e => e.stopPropagation()}>
                        {list.map(item => (
                            <li
                                className="dd-list-item"
                                key={item.indexOf + Math.random(1)}
                                onClick={(event) => { this.selectItem(item, item.indexOf); whenClicked();}}>
                                {item} {item.selected && "*"}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        )
    }
}

export default Dropdown;
