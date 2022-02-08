import Author from './Author';
import Text from './Text';

function Comment(props: any) {
    return (
        <div className="Comment">
            <Author user={props.info.user}/>
            <Text info={props.info.text}/>
        </div>
    );
}

export default Comment;