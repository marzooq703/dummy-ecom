import TextField from "@material-ui/core/TextField";
export default function AdminPanel() {
  return (
    <div>
      <TextField
        id="outlined-basic"
        label="Enter Product Name"
        variant="outlined"
      />
      <br />
      <br />
      <TextField
        id="outlined-basic"
        label=" Enter Product Description"
        variant="outlined"
      />
      <br />
      <br />
      <TextField id="outlined-basic" label="Enter amount" variant="outlined" />
      <br />
      <br />
      <input type="file" label="Select Image" />
    </div>
  );
}
