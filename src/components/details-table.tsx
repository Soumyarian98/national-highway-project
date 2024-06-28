import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ReactNode } from "react";

interface Props {
  data: {
    header?: string[];
    rows: (
      | (string | ReactNode)
      | (string | ReactNode)[]
      | (string | ReactNode)[][]
    )[][];
  };
}

const DetailsTable = ({ data }: Props) => {
  return (
    <Card>
      <Table>
        {data.header && (
          <TableHeader>
            <TableRow>
              {data.header.map((head, index) => (
                <TableHead
                  key={index}
                  className="whitespace-nowrap text-ellipsis overflow-hidden"
                >
                  {head}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
        )}
        <TableBody>
          {data.rows.map((row, index) => (
            <TableRow key={index}>
              {row.map((cell, index) => {
                if (Array.isArray(cell) && cell.length > 0) {
                  return (
                    <TableCell key={index}>
                      <ul className="list-disc pl-4">
                        {cell.map((item, index) => {
                          if (Array.isArray(item) && item.length > 0) {
                            return (
                              <li
                                key={index}
                                className="flex justify-between items-center mb-1"
                              >
                                <span>
                                  {index + 1}. {item[0]}
                                </span>
                                <span>{item[1]}</span>
                              </li>
                            );
                          }
                          return <li key={index}>{item}</li>;
                        })}
                      </ul>
                    </TableCell>
                  );
                }
                return <TableCell key={index}>{cell}</TableCell>;
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};

export default DetailsTable;
