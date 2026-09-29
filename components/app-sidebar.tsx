import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem
  
} from "@/components/ui/sidebar"

export function AppSidebar() {
  return (
    <Sidebar>
  <SidebarHeader>
    <SidebarMenu>
      <SidebarMenuItem>
        <h1 className="text-lg font-bold text-center">Dasboard</h1>
      </SidebarMenuItem>
    </SidebarMenu>
  </SidebarHeader>
</Sidebar>
  )
}