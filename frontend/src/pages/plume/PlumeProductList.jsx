import Header from '../../components/Header'
import LeftSidebar from '../../components/sidebar/LeftSidebar'
import RecentAlerts from '../alerts/RecentAlerts'
import { BsArrowRightShort } from 'react-icons/bs'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { FiAlertTriangle } from 'react-icons/fi'

const PlumeProductList = () => {
  return (
    <div className="sub_container">
      <LeftSidebar />
      <div className="second_section">
        <Header />
        <div >
          <div className="plume_product_container">
            <div className="products">
              <div className="product_list red">
                <div className="product_heading">
                  <h3>MV1 Compal</h3>
                  <p>271 <FiAlertTriangle /></p>
                </div>
                <div className="product_body">
                  <span><p>Features</p><AiOutlineInfoCircle /></span>
                  <div className="product_kpi">
                    <span>
                      <p>Channel optimization:</p>
                      <progress id="file" value="32" max="100"> 32% </progress>
                      <span>235</span>
                    </span>
                    <section>
                      <em>View details</em>
                      <BsArrowRightShort />
                    </section>
                  </div>
                  <div className="product_kpi">
                    <span>
                      <p>Band Steering:</p>
                      <progress id="file" value="32" max="100"> 32% </progress>
                      <span>235</span>
                    </span>
                    <section>
                      <em>View details</em>
                      <BsArrowRightShort />
                    </section>
                  </div>
                  <div className="product_kpi">
                    <span>
                      <p>Managed WIFI :</p>
                      <progress id="file" value="32" max="100"> 32% </progress>
                      <span>235</span>
                    </span>
                    <section>
                      <em>View details</em>
                      <BsArrowRightShort />
                    </section>
                  </div>
                </div>
              </div>
              <div className="product_list ember">
                <div className="product_heading">
                  <h3>MV1 Arris</h3>
                  <p>271 <FiAlertTriangle /></p>
                </div>
                <div className="product_body">
                  <span><p>Features</p><AiOutlineInfoCircle /></span>
                  <div className="product_kpi">
                    <span>
                      <p>Channel optimization:</p>
                      <progress id="file" value="32" max="100"> 32% </progress>
                      <span>235</span>
                    </span>
                    <section>
                      <em>View details</em>
                      <BsArrowRightShort />
                    </section>
                  </div>
                  <div className="product_kpi">
                    <span>
                      <p>Band Steering:</p>
                      <progress id="file" value="32" max="100"> 32% </progress>
                      <span>235</span>
                    </span>
                    <section>
                      <em>View details</em>
                      <BsArrowRightShort />
                    </section>
                  </div>
                  <div className="product_kpi">
                    <span>
                      <p>Managed WIFI :</p>
                      <progress id="file" value="32" max="100"> 32% </progress>
                      <span>235</span>
                    </span>
                    <section>
                      <em>View details</em>
                      <BsArrowRightShort />
                    </section>
                  </div>
                </div>
              </div>
              <div className="product_list green">
                <div className="product_heading">
                  <h3>MV1 Compal</h3>
                  <p>271 <FiAlertTriangle /></p>
                </div>
                <div className="product_body">
                  <span><p>Features</p><AiOutlineInfoCircle /></span>
                  <div className="product_kpi">
                    <span>
                      <p>Channel optimization:</p>
                      <progress id="file" value="32" max="100"> 32% </progress>
                      <span>235</span>
                    </span>
                    <section>
                      <em>View details</em>
                      <BsArrowRightShort />
                    </section>
                  </div>
                  <div className="product_kpi">
                    <span>
                      <p>Band Steering:</p>
                      <progress id="file" value="32" max="100"> 32% </progress>
                      <span>235</span>
                    </span>
                    <section>
                      <em>View details</em>
                      <BsArrowRightShort />
                    </section>
                  </div>
                  <div className="product_kpi">
                    <span>
                      <p>Managed WIFI :</p>
                      <progress id="file" value="32" max="100"> 32% </progress>
                      <span>235</span>
                    </span>
                    <section>
                      <em>View details</em>
                      <BsArrowRightShort />
                    </section>
                  </div>
                </div>
              </div>
              <div className="product_list default">
                <div className="product_heading">
                  <h3>MV1 Compal</h3>
                  <p>271 <FiAlertTriangle /></p>
                </div>
                <div className="product_body">
                  <span><p>Features</p><AiOutlineInfoCircle /></span>
                  <div className="product_kpi">
                    <span>
                      <p>Channel optimization:</p>
                      <progress id="file" value="32" max="100"> 32% </progress>
                      <span>235</span>
                    </span>
                    <section>
                      <em>View details</em>
                      <BsArrowRightShort />
                    </section>
                  </div>
                  <div className="product_kpi">
                    <span>
                      <p>Band Steering:</p>
                      <progress id="file" value="32" max="100"> 32% </progress>
                      <span>235</span>
                    </span>
                    <section>
                      <em>View details</em>
                      <BsArrowRightShort />
                    </section>
                  </div>
                  <div className="product_kpi">
                    <span>
                      <p>Managed WIFI :</p>
                      <progress id="file" value="32" max="100"> 32% </progress>
                      <span>235</span>
                    </span>
                    <section>
                      <em>View details</em>
                      <BsArrowRightShort />
                    </section>
                  </div>
                </div>
              </div>
            </div>
            
            <RecentAlerts />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlumeProductList