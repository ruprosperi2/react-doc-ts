function Text(props: any) {
    console.log(props);
    return (
        <div className="Comment-text">
            {props.info}
        </div>
    );
}

export default Text;