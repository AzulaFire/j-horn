import { Card } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const TechnologyStack = ({ techStack }) => {
  return (
    <Card>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Category</TableHead>
            <TableHead>Technologies</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {techStack.map((row) => (
            <TableRow key={row.category}>
              <TableCell className='font-medium'>{row.category}</TableCell>
              <TableCell>{row.tech}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};
export default TechnologyStack;
