import React from "react";
import { connect } from "react-redux";

const mapStateProps = state => {
    return { articles: state.articles};
};

const ConnectedList = ({ articles }) => (
    <ul className="List-group list-group-flush">
        {articles.map (el => (
            <li className="list-group-item" key={el.id}>
                {el.title}
            </li>
        ))}
    </ul>
);

const List = connect(mapStateProps)(ConnectedList);

export default List;