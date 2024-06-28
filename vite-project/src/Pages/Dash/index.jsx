
const Table =({data,handleAddRow}) => {
    
 


  return (
    <div>
      
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th> Duration</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.filmName}</td>
              <td>{item.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button type="button" onClick={handleAddRow}>Add Row</button>
    </div>
  );
};

export default Table;
