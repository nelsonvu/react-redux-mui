// material-ui
import { Divider, List, Typography } from "@mui/material";

// project imports
import NavItem from "../NavItem";
import NavCollapse from "../NavCollapse";
import { MenuType } from "../../../../../types/enum";
import { Pages } from "../../../../../menu-items/interface/page";

// ==============================|| SIDEBAR MENU LIST GROUP ||============================== //

interface NavGroupProps {
  item: Pages;
}

const NavGroup = ({ item }: NavGroupProps) => {
  // menu list collapse & items
  const items = item.children?.map((menu) => {
    switch (menu.type) {
      case MenuType.Collapse:
        return <NavCollapse key={menu.id} menu={menu} level={1} />;
      case MenuType.Item:
        return <NavItem key={menu.id} item={menu} level={1} />;
      default:
        return (
          <Typography key={menu.id} variant="h6" color="error" align="center">
            Menu Items Error
          </Typography>
        );
    }
  });

  return (
    <>
      <List
        subheader={
          item.title && (
            <Typography
              sx={{
                fontSize: "0.875rem",
                fontWeight: 500,
                padding: "6px",
                textTransform: "capitalize",
                marginTop: "10px",
              }}
              variant="caption"
              display="block"
              gutterBottom
            >
              {item.title}
              {item.caption && (
                <Typography
                  sx={{
                    fontSize: "0.6875rem",
                    fontWeight: 500,
                    textTransform: "capitalize",
                  }}
                  variant="caption"
                  display="block"
                  gutterBottom
                >
                  {item.caption}
                </Typography>
              )}
            </Typography>
          )
        }
      >
        {items}
      </List>

      {/* group divider */}
      <Divider sx={{ mt: 0.25, mb: 1.25 }} />
    </>
  );
};

export default NavGroup;
