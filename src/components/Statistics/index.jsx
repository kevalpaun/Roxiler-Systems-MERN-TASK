import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";

const Statistics = ({ data }) => {
  return (
    <Box display={"flex"} width={"100%"} elevation={1} style={{ margin: 30 }}>
      <Card raised>
        <CardHeader>{`Statistics`}</CardHeader>
        <CardContent>
          <Box display={"flex"} justifyContent={"center"}>
            <Typography>Total Sales : </Typography>
            <Typography>{data?.totalSaleAmount}</Typography>
          </Box>
          <Box display={"flex"} justifyContent={"center"}>
            <Typography>Total Sold Items : </Typography>
            <Typography>{data?.totalSoldItems}</Typography>
          </Box>
          <Box display={"flex"} justifyContent={"center"}>
            <Typography>Total Not Sold Items : </Typography>
            <Typography>{data?.totalUnsoldItems}</Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};
export default Statistics;
