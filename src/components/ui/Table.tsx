type TableProps = {
  columns: string[];
  data: Array<Record<string, string | number>>;
  striped?: boolean;
};

export default function Table({ columns, data, striped = false }: TableProps) {
  return (
    <div className="table-wrapper">
      <table className={striped ? "table table-striped" : "table"}>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column} scope="col">
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={`${row.name ?? "row"}-${rowIndex}`}>
              {columns.map((column) => (
                <td key={column}>{row[column.toLowerCase()]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
