import './style.scss';

const History = (props) => {

  const { history, changeHistory } = props;
  return (
    <>
      <ul>
        { history.length ?
          history.map((record, idx) => (
            <li key={`history-${idx}`}>
              <button onClick={() => changeHistory(idx) }>
                {record.requestParams.method} : {record.requestParams.url}
              </button>
            </li>
          )) : ''
        }
      </ul>
    </>
  )
};

export default History;