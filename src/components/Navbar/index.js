import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {Home, Bookmarks, ShoppingCart, LocalShipping, Help} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginBottom: 30,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function Navbar(props) {
    const classes = useStyles();
    const [menuVisible, setMenuVisible] = React.useState(false);

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton id={"abrir-menu"} onClick={() => setMenuVisible(true)} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Iw Store
                    </Typography>
                    <Button id={"logout"} onClick={() => props.history.push('/')} color="inherit">Sair</Button>
                </Toolbar>
            </AppBar>

            <Drawer anchor={"left"} open={menuVisible} onClose={() => setMenuVisible(false)}>
                <div align={"center"} className={"mt-3"}>
                    <h3><strong>Iw Store</strong></h3>
                </div>
                <List>
                    <ListItem button onClick={() => props.history.push('/inicio')}>
                        <ListItemIcon><Home/></ListItemIcon>
                        <ListItemText>Página Inicial</ListItemText>
                    </ListItem>

                    <ListItem button onClick={() => props.history.push('/inicio')}>
                        <ListItemIcon><Bookmarks/></ListItemIcon>
                        <ListItemText>Categorias</ListItemText>
                    </ListItem>

                    <ListItem button onClick={() => props.history.push('/pedidos')}>
                        <ListItemIcon><LocalShipping/></ListItemIcon>
                        <ListItemText>Pedidos</ListItemText>
                    </ListItem>

                    <ListItem button id={"pagina-carrinho"} onClick={() => props.history.push('/carrinho')}>
                        <ListItemIcon><ShoppingCart/></ListItemIcon>
                        <ListItemText>Carrinho</ListItemText>
                    </ListItem>

                    <Divider/>

                    <ListItem button onClick={() => props.history.push('/ajuda')}>
                        <ListItemIcon><Help/></ListItemIcon>
                        <ListItemText>Ajuda</ListItemText>
                    </ListItem>
                </List>
            </Drawer>
        </div>
    );
}
