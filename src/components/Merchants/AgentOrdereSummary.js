import React from "react";
import Backicon from "../../Assets/backicon.png";
import Heading from "../../common/Heading";
import styles from "./AgentOrderSummary.module.css"
const AgentOrdereSummary = () => {
    const square = {
        width: '200',
        height: '200',
        backgroundColor: 'red'
    }
    const color = {
        color: '#706C6C',
        fontSize: '15px',
        
    }
    const padding = {
        padding: '7%',
        width:"100%"
    }
    
    const rupeesSize = {
        fontSize: '26px',
        fontWeight: '600'
    }
    const cardBottom = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        fontSize: '16px'
    }
    const tableHead = {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'

    }
    const tableColumnData = {
        fontSize: '13px',
        fontWeight: '500px',
        fontSize: '13px',
        // lineHeight: '16px'
    }
  return (
    <div className="pt-4">
      <div className="d-flex align-items-center">
        <div>
          <img src={Backicon} />
        </div>
        <div className="ps-3">
          <Heading name="Rahul Sharma" />
        </div>
      </div>
      <div className={styles.cardParent}>
        <div className={styles.rowCard}>
          <div style={padding}>
            <div className={`${styles.headingCard}`}>Total sale</div>
            <div style={rupeesSize}>Rs. 98,000</div>
            <div style={cardBottom}>
              <div>20.9</div>
              <div style={color}>+19.5K this week</div>
            </div>
          </div>
          <div className={styles.verticalLines}></div>
        </div>

        <div className={styles.rowCard}>
          <div style={padding}>
            <div className={`${styles.headingCard}`}>Orders</div>
            <div style={rupeesSize}>Rs. 98,000</div>
            <div style={cardBottom}>
              <div>20.9</div>
              <div style={color}>+19.5K this week</div>
            </div>
          </div>
          <div className={styles.verticalLines}></div>
        </div>
        <div className={styles.rowCard}>
          <div style={padding}>
            <div className={`${styles.headingCard}`}>Completed orders</div>
            <div style={rupeesSize}>543</div>
            <div style={cardBottom}>
              <div>20.9</div>
              <div style={color}>+19.5K this week</div>
            </div>
          </div>
          <div className={styles.verticalLines}></div>
        </div>
        <div className={styles.rowCard}>
          <div style={padding}>
            <div className={`${styles.headingCard}`}>Pending orders</div>
            <div style={rupeesSize}>43</div>
            <div style={cardBottom}>
              <div>20.9</div>
              <div style={color}>+19.5K this week</div>
            </div>
          </div>
          <div className={styles.verticalLines}></div>
        </div>
        <div className={styles.rowCard}>
          <div style={padding}>
            <div className={`${styles.headingCard}`}>Pending orders</div>
            <div style={rupeesSize}>4</div>
            <div style={cardBottom}>
              <div>20.9</div>
              <div style={color}>+19.5K this week</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentOrdereSummary;
