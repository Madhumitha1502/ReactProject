import "../styles/History.css";

function History({ history }) {

    if(history.length===0){
        return null;
    }

    return(

        <div className="history">

            <h2>Recent Analysis</h2>

            <table>

                <thead>

                    <tr>

                        <th>ATS Score</th>
                        <th>Matched</th>
                        <th>Missing</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        history.map((item,index)=>(

                            <tr key={index}>

                                <td>{item.score}%</td>

                                <td>{item.matched}</td>

                                <td>{item.missing}</td>

                            </tr>

                        ))

                    }

                </tbody>

            </table>

        </div>

    );

}

export default History;