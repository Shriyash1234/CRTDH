import React from 'react';

const Footer1 = () => {
    return (
        <footer1 style={styles.footer1}>
            <div style={styles.description}>
                <h4>DSIR</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iusto ullam sapiente in dignissimos repudiandae vitae saepe, tempore placeat aut cumque quae neque itaque quis sit eos amet modi, iure tenetur nam reprehenderit eligendi deserunt voluptatem pariatur. Iste corporis quidem enim officiis odio consequuntur culpa labore doloremque? Quaerat necessitatibus eaque dicta neque aliquam quas! Blanditiis soluta cupiditate optio, nesciunt eaque sequi et tempora odit ipsam, provident temporibus, ullam id! Distinctio ullam officia enim expedita est atque totam et, voluptatem repellat consequatur dignissimos fugit alias animi esse nam autem placeat facilis hic ipsum numquam voluptas. Cum aliquam porro itaque ducimus?</p>
            </div>
            <div style={styles.quickLinks}>
                <h4>Quick Links</h4>
                <ul>
                    <li><a href="#">Link 1</a></li>
                    <li><a href="#">Link 2</a></li>
                    <li><a href="#">Link 3</a></li>
                    <li><a href="#">Link 4</a></li>
                    <li><a href="#">Link 5</a></li>
                    <li><a href="#">Link 6</a></li>
                    <li><a href="#">Link 7</a></li>
                </ul>
            </div>
            <div style={styles.reachUs}>
                <h4>Reach Us</h4>
                <p>HEAD OFFICE</p>
                <p>CALL US</p>
            </div>
        </footer1>
    );
};

export default Footer1;

const styles = {
    footer1: {
        backgroundColor: '#333',
        color: '#fff',
        padding: '20px',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    description: {
        flex: '1 1 30%',
        marginBottom: '20px',
        padding: '20px',
    },
    quickLinks: {
        display:'flex',
        // justifyContent:'center',
        flexDirection:'column',
        // alignItems:'center',
        flex: '1 1 30%',
        padding: '20px',
    },
    reachUs: {
        flex: '1 1 30%',
        marginBottom: '20px',
        display:'flex',
        // justifyContent:'center',
        flexDirection:'column',
        alignItems:'center',
        padding: '20px',
    },
};
