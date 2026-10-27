'use client'
import Link from "next/link";
import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function UserManagementPage() {
  return (
    <Card className="p-6">
      <div>
        <h1 className="text-2xl font-bold mb-1">Jurusan</h1>
        <p className="text-muted-foreground">Manage your users here</p>
      </div>

   <div className="flex justify-end mb-4">
          <Link href="/admin/jurusan/from">
            <Button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold">
              <Plus className="mr-2 h-4 w-4" /> FORM
            </Button>
          </Link>
        </div>

      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead>Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>INV001</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell>$250.00</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Card>
  )
}