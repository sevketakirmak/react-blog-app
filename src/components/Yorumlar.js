import React from "react";
import { connect } from "react-redux";
import { deleteComment, addComment } from "../actions";

class Yorumlar extends React.Component {

    state = { user: "", comment: "", userCheck: true, commentCheck: true };

    add = () => {
        if (this.state.user === '') {
            this.setState({ userCheck: false });
        }
        else {
            this.setState({ userCheck: true });
        }
        if (this.state.comment === '') {
            this.setState({ commentCheck: false });
        }
        else {
            this.setState({ commentCheck: true });
        }
        if (this.state.user !== '' && this.state.comment !== '') {
            this.setState({ userCheck: true, commentCheck: true });
            const element = [
                {
                    user: this.state.user,
                    comment: this.state.comment
                }
            ];
            this.props.addComment(element[0]);
        }
    }
    render() {

        const renderComment = this.props.commentList.map(comment => {
            return (
                <div key={comment.user} className='col-md-6 d-flex justify-content-between yorum'>
                    <div>
                        <h4>{comment.user}</h4>
                        <p>{comment.comment}</p>
                    </div>
                    <div>
                        <button className='btn btn-danger' id='delete' onClick={() => this.props.deleteComment(comment)}>Sil</button>
                    </div>
                </div>
            );
        });
        return (
            <div>
                <div className="container comments">
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Kullancı Adı:</label>
                        <input onChange={(e) => this.setState({ user: e.target.value })} type="email" className={`form-control ${this.state.userCheck ? "" : "border-color"}`} id="userName" placeholder="Kullanıcı Adı" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Yorum:</label>
                        <textarea onChange={(e) => this.setState({ comment: e.target.value })} className={`form-control ${this.state.commentCheck ? "" : "border-color"}`} id="comment" rows="3" placeholder="Yorum Yap"></textarea>
                    </div>
                    <button onClick={this.add} id="addComment" className="btn btn-primary">Yorum Yap</button>
                </div>
                <div className="container mt-4">
                    <div className="row yorumlar">
                        {renderComment}
                    </div>
                </div>
            </div>
        );
    }
}

const mapState = (state) => {
    return { commentList: state.commentList };
}

export default connect(mapState, { deleteComment, addComment })(Yorumlar);