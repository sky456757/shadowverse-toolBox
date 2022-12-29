import * as React from 'react';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { Stack } from '@mui/system';

function not(a, b) {
  return a.filter((value) => b.indexOf(value) === -1);
}

function intersection(a, b) {
  return a.filter((value) => b.indexOf(value) !== -1);
}

function union(a, b) {
  return [...a, ...not(b, a)];
}

export default function DeckBuild() {
  const [checked, setChecked] = React.useState([]);
  const [left, setLeft] = React.useState([{cardName:"0" , amount:1}, {cardName:"0" , amount:1}, {cardName:"0" , amount:1}, {cardName:"0" , amount:1}]);
  const [right, setRight] = React.useState([]);
  const [list,setList] = React.useState('');
  const [amount,setAmount] = React.useState(0);
  const leftChecked = intersection(checked, left);
  const rightChecked = intersection(checked, right);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const numberOfChecked = (items) => intersection(checked, items).length;

  const handleToggleAll = (items) => () => {
    if (numberOfChecked(items) === items.length) {
      setChecked(not(checked, items));
    } else {
      setChecked(union(checked, items));
    }
  };

  const handleCheckedRight = () => {
    setRight(right.concat(leftChecked));
    setLeft(not(left, leftChecked));
    let a = 0;
    right.concat(leftChecked).forEach((e)=>{a+=e.amount})
    setAmount(a)
    //alert(a)
    setChecked(not(checked, leftChecked));
  };

  const handleCheckedLeft = () => {
    setLeft(left.concat(rightChecked));
    setRight(not(right, rightChecked));
    let a = 0;
    not(right, rightChecked).forEach((e)=>{a+=e.amount})
    setAmount(a)
    //alert(a)
    setChecked(not(checked, rightChecked));
  };
  const handleAmount = (items,value,fun,dir) =>
  {
    let newValue = value
    //alert(1)
    if(dir === 1 && newValue.amount < 3)
        newValue.amount = newValue.amount+dir
    if(dir === -1 && newValue.amount > 1)
        newValue.amount = newValue.amount+dir
    //alert(newValue.amount)
    items[items.indexOf(value)] = newValue
    //alert(items[0])
    fun(items)
    setChecked(not(checked, items));


  }
  const customList = (title, items,edit) => (
    <Card>
      <CardHeader
        sx={{ px: 2, py: 1 }}
        avatar={
          <Checkbox
            onClick={handleToggleAll(items)}
            checked={numberOfChecked(items) === items.length && items.length !== 0}
            indeterminate={
              numberOfChecked(items) !== items.length && numberOfChecked(items) !== 0
            }
            disabled={items.length === 0}
            inputProps={{
              'aria-label': 'all items selected',
            }}
          />
        }
        title={title}
        subheader={`${numberOfChecked(items)}/${items.length} selected`}
      />
      <Divider />
      <List
        sx={{
          width: 400,
          height: 700,
          bgcolor: 'background.paper',
          overflow: 'auto',
        }}
        dense
        component="div"
        role="list"
      >
        {items.map((value) => {
          const labelId = `transfer-list-all-item-${value}-label`;

          return (
            <Stack direction="row">
            <ListItem
              key={value}
              role="listitem"
              amount= {1}
              button
              onClick={handleToggle(value)}
            >
              <ListItemIcon>
                <Checkbox
                  checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{
                    'aria-labelledby': labelId,
                  }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={`${value.cardName} x ${value.amount}`} />
            </ListItem>
            <Button size="small" onClick={() => handleAmount(items,value,edit,1)}>up</Button>
            <Button size="small" onClick={() => handleAmount(items,value,edit,-1)}>down</Button>
            </Stack>
          );
        })}
      </List>
    </Card>
  );
  const generateList = () =>
  {
    
    setList()
  }
  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center">
      <Grid item>{customList('Choices', left,setLeft)}</Grid>
      <Grid item>
        <Grid container direction="column" alignItems="center">
          <Button
            sx={{ my: 0.5 }}
            variant="outlined"
            size="small"
            onClick={handleCheckedRight}
            disabled={leftChecked.length === 0}
            aria-label="move selected right"
          >
            &gt;
          </Button>
          <Button
            sx={{ my: 0.5 }}
            variant="outlined"
            size="small"
            onClick={handleCheckedLeft}
            disabled={rightChecked.length === 0}
            aria-label="move selected left"
          >
            &lt;
          </Button>
        </Grid>
      </Grid>
      <Grid item>{customList('Chosen', right,setRight)}</Grid>
    </Grid>
  );
}
