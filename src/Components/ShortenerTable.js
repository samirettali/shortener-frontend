import React from "react";
import { Trash } from "heroicons-react";

class ShortenerTable extends React.Component {
  render() {
    const backend = "http://localhost/api/urls/";
    let rows = [];
    for (const [index, url] of this.props.urls.entries()) {
      let columns = [];
      columns.push(
        <td className="border px-4 py-2">
          <a
            className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
            href={backend + url.id}
            target="_blank"
            hover="ciao"
          >
            {backend + url.id}
          </a>
        </td>
      );
      columns.push(
        <td className="border px-4 py-2">
          <a
            className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
            href={url.url}
            target="_blank"
          >
            {url.url}
          </a>
        </td>
      );
      columns.push(<td className="border px-4 py-2">{url.clicks}</td>);
      columns.push(
        <td className="border px-4 py-2">
          <a
            className="text-gray-900 hover:bg-gray-800"
            href="#"
            onClick={() => this.props.deleteUrl(url.id)}
          >
            <Trash />
          </a>
        </td>
      );
      let row = <tr key={index}>{columns}</tr>;
      rows.push(row);
    }
    return (
      <table className="border-collapse text-center">
        <thead>
          <tr>
            <th className="px-4 py-2">Shortened</th>
            <th className="px-4 py-2">Full URL</th>
            <th className="px-4 py-2">Clicks</th>
            <th className="px-4 py-2"></th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

export default ShortenerTable;
