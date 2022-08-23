import RecentAlerts from '../alerts/RecentAlerts'
import Banner from '../banner/Banner'
import { Link, Outlet } from 'react-router-dom'
import { RiCheckboxBlankFill } from 'react-icons/ri'
import { FiAlertTriangle } from 'react-icons/fi'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { BsArrowRightShort } from 'react-icons/bs'
import { IoIosArrowDropright } from 'react-icons/io'
import '../../index.scss'

const PlumeIndex = () => {
  return (
    <div className='plume_container'>
        <div className="plume_header">
            <Banner />
            <RecentAlerts />
        </div>
        {/* Plume Alert Overview */}
        <div className="plume_alert_overiew">
          <h3>Plume alert overview</h3>
          <p>Alert color codes</p>
          <div className="alert_count">
            <p>Alert count from: </p>
            <ul>
              <li><RiCheckboxBlankFill className='green' /><p>0 to 30</p></li>
              <li><RiCheckboxBlankFill className='ember' /><p>31 to 50</p></li>
              <li><RiCheckboxBlankFill className='red' /><p>above 50</p></li>
            </ul>
          </div>
          <div className="plume_filter_option">
            <p>Environment: </p>
            <ul>
              <li>
                <input type="radio" name='radio' id='theta' />
                <label htmlFor="theta">Theta</label>
              </li>
              <li>
                <input type="radio" name='radio' id='theta-dev' />
                <label htmlFor="theta-dev">Theta-dev</label>
              </li>
            </ul>
            <div className="vl"></div>
            <div className="current_release">
              <p>Current release: </p>
              <select name="current-release" id="version">
                <option value="select" disabled>select</option>
                <option value="R1_82">R1_82</option>
                <option value="R2_83">R2_83</option>
                <option value="R3_84">R3_84</option>
              </select>
            </div>
            <div className="vl"></div>
            <div className="current_release">
              <p>Timestamp: </p>
              <label htmlFor="from">From</label>
              <input type="date" id='from' />
              <label htmlFor="from">To</label>
              <input type="date" id='from' />
            </div>
          </div>
        </div>

        <div className="plume_data_table">
          {/* 1 */}
          <div className="country_specific_data">
            <div className="country_name ch">
              <p>CH</p>
              <p>288</p>
            </div>
            <div className="product p1">
              <div className="pr_n">
                <p>MV1 Compal</p>
                <span>271 <FiAlertTriangle /></span>
              </div>
              <div className="feature">
                <span><p>Features</p><AiOutlineInfoCircle /></span>
                <div className="product_kpi">
                  <p>Channel optimization:</p>
                  <progress id="file" value="32" max="100"> 32% </progress>
                  <span>235</span>
                  <BsArrowRightShort />
                </div>
                <div className="product_kpi">
                  <p>Band Steering:</p>
                  <progress id="file" value="32" max="100"> 32% </progress>
                  <span>235</span>
                  <BsArrowRightShort />
                </div>
                <div className="product_kpi">
                  <p>Managed Wifi:</p>
                  <progress id="file" value="32" max="100"> 32% </progress>
                  <span>235</span>
                  <BsArrowRightShort />
                </div>
              </div>
            </div>
            <div className="product p2">
              <div className="pr_n">
                <p>MV1 Arris</p>
                <span>271 <FiAlertTriangle /></span>
              </div>
              <div className="feature">
                <span><p>Features</p><AiOutlineInfoCircle /></span>
                <div className="product_kpi">
                  <p>Channel optimization:</p>
                  <progress id="file" value="32" max="100"> 32% </progress>
                  <span>235</span>
                  <BsArrowRightShort />
                </div>
                <div className="product_kpi">
                  <p>Band Steering:</p>
                  <progress id="file" value="32" max="100"> 32% </progress>
                  <span>235</span>
                  <BsArrowRightShort />
                </div>
                <div className="product_kpi">
                  <p>Managed Wifi:</p>
                  <progress id="file" value="32" max="100"> 32% </progress>
                  <span>235</span>
                  <BsArrowRightShort />
                </div>
              </div>
            </div>
            <div className="product p3">
              <div className="pr_n">
                <p>MV2 Arris</p>
                <span>271 <FiAlertTriangle /></span>
              </div>
              <div className="feature">
                <span><p>Features</p><AiOutlineInfoCircle /></span>
                <div className="product_kpi">
                  <p>Channel optimization:</p>
                  <progress id="file" value="32" max="100"> 32% </progress>
                  <span>235</span>
                  <BsArrowRightShort />
                </div>
                <div className="product_kpi">
                  <p>Band Steering:</p>
                  <progress id="file" value="32" max="100"> 32% </progress>
                  <span>235</span>
                  <BsArrowRightShort />
                </div>
                <div className="product_kpi">
                  <p>Managed Wifi:</p>
                  <progress id="file" value="32" max="100"> 32% </progress>
                  <span>235</span>
                  <BsArrowRightShort />
                </div>
              </div>
            </div>
            {/* <div className="product p4"></div> */}
            <div className="viewall">
              <Link to='product-list'>
                <IoIosArrowDropright />
                <p>See all</p>
              </Link>
            </div>
          </div>
          {/* 2 */}
          <div className="country_specific_data">
            <div className="country_name nl"><p>NL</p>
            <p>89</p></div>
            <div className="product p1">
              <div className="pr_n">
                <p>MV1 Compal</p>
                <span>271 <FiAlertTriangle /></span>
              </div>
              <div className="feature">
                <span><p>Features</p><AiOutlineInfoCircle /></span>
                <div className="product_kpi">
                  <p>Channel optimization:</p>
                  <progress id="file" value="32" max="100"> 32% </progress>
                  <span>235</span>
                  <BsArrowRightShort />
                </div>
                <div className="product_kpi">
                  <p>Band Steering:</p>
                  <progress id="file" value="32" max="100"> 32% </progress>
                  <span>235</span>
                  <BsArrowRightShort />
                </div>
                <div className="product_kpi">
                  <p>Managed Wifi:</p>
                  <progress id="file" value="32" max="100"> 32% </progress>
                  <span>235</span>
                  <BsArrowRightShort />
                </div>
              </div>
            </div>
            <div className="product p2">
              <div className="pr_n">
                <p>MV1 Arris</p>
                <span>271 <FiAlertTriangle /></span>
              </div>
              <div className="feature">
                <span><p>Features</p><AiOutlineInfoCircle /></span>
                <div className="product_kpi">
                  <p>Channel optimization:</p>
                  <progress id="file" value="32" max="100"> 32% </progress>
                  <span>235</span>
                  <BsArrowRightShort />
                </div>
                <div className="product_kpi">
                  <p>Band Steering:</p>
                  <progress id="file" value="32" max="100"> 32% </progress>
                  <span>235</span>
                  <BsArrowRightShort />
                </div>
                <div className="product_kpi">
                  <p>Managed Wifi:</p>
                  <progress id="file" value="32" max="100"> 32% </progress>
                  <span>235</span>
                  <BsArrowRightShort />
                </div>
              </div>
            </div>
            <div className="product p3">
              <div className="pr_n">
                <p>MV2 Arris</p>
                <span>271 <FiAlertTriangle /></span>
              </div>
              <div className="feature">
                <span><p>Features</p><AiOutlineInfoCircle /></span>
                <div className="product_kpi">
                  <p>Channel optimization:</p>
                  <progress id="file" value="32" max="100"> 32% </progress>
                  <span>235</span>
                  <BsArrowRightShort />
                </div>
                <div className="product_kpi">
                  <p>Band Steering:</p>
                  <progress id="file" value="32" max="100"> 32% </progress>
                  <span>235</span>
                  <BsArrowRightShort />
                </div>
                <div className="product_kpi">
                  <p>Managed Wifi:</p>
                  <progress id="file" value="32" max="100"> 32% </progress>
                  <span>235</span>
                  <BsArrowRightShort />
                </div>
              </div>
            </div>
            {/* <div className="product p4"></div> */}
            <div className="viewall">
              <Link to='product-list'>
                <IoIosArrowDropright />
                <p>See all</p>
              </Link>
            </div>
            {/* <div className="viewall"></div> */}
          </div>
          {/* 3 */}
          <div className="country_specific_data">
            <div className="country_name uk"><p>UK</p>
            <p>17</p></div>
            <div className="product p1">
              <div className="pr_n">
                <p>MV1 Compal</p>
                <span>271 <FiAlertTriangle /></span>
              </div>
              <div className="feature">
                <span><p>Features</p><AiOutlineInfoCircle /></span>
                <div className="product_kpi">
                  <p>Channel optimization:</p>
                  <progress id="file" value="32" max="100"> 32% </progress>
                  <span>235</span>
                  <BsArrowRightShort />
                </div>
                <div className="product_kpi">
                  <p>Band Steering:</p>
                  <progress id="file" value="32" max="100"> 32% </progress>
                  <span>235</span>
                  <BsArrowRightShort />
                </div>
                <div className="product_kpi">
                  <p>Managed Wifi:</p>
                  <progress id="file" value="32" max="100"> 32% </progress>
                  <span>235</span>
                  <BsArrowRightShort />
                </div>
              </div>
            </div>
            <div className="product p2">
              <div className="pr_n">
                <p>MV1 Arris</p>
                <span>271 <FiAlertTriangle /></span>
              </div>
              <div className="feature">
                <span><p>Features</p><AiOutlineInfoCircle /></span>
                <div className="product_kpi">
                  <p>Channel optimization:</p>
                  <progress id="file" value="32" max="100"> 32% </progress>
                  <span>235</span>
                  <BsArrowRightShort />
                </div>
                <div className="product_kpi">
                  <p>Band Steering:</p>
                  <progress id="file" value="32" max="100"> 32% </progress>
                  <span>235</span>
                  <BsArrowRightShort />
                </div>
                <div className="product_kpi">
                  <p>Managed Wifi:</p>
                  <progress id="file" value="32" max="100"> 32% </progress>
                  <span>235</span>
                  <BsArrowRightShort />
                </div>
              </div>
            </div>
            <div className="product p3">
              <div className="pr_n">
                <p>MV2 Arris</p>
                <span>271 <FiAlertTriangle /></span>
              </div>
              <div className="feature">
                <span><p>Features</p><AiOutlineInfoCircle /></span>
                <div className="product_kpi">
                  <p>Channel optimization:</p>
                  <progress id="file" value="32" max="100"> 32% </progress>
                  <span>235</span>
                  <BsArrowRightShort />
                </div>
                <div className="product_kpi">
                  <p>Band Steering:</p>
                  <progress id="file" value="32" max="100"> 32% </progress>
                  <span>235</span>
                  <BsArrowRightShort />
                </div>
                <div className="product_kpi">
                  <p>Managed Wifi:</p>
                  <progress id="file" value="32" max="100"> 32% </progress>
                  <span>235</span>
                  <BsArrowRightShort />
                </div>
              </div>
            </div>
            {/* <div className="product p4"></div> */}
            <div className="viewall">
              <Link to='product-list'>
                <IoIosArrowDropright />
                <p>See all</p>
              </Link>
            </div>
            {/* <div className="viewall"></div> */}
          </div>
          {/* 4 */}
          <div className="country_specific_data">
            <div className="country_name pl"><p>PL</p>
            <p>48</p></div>
            <div className="product p1">
              <div className="pr_n">
                <p>MV1 Compal</p>
                <span>271 <FiAlertTriangle /></span>
              </div>
              <div className="feature">
                <span><p>Features</p><AiOutlineInfoCircle /></span>
                <div className="product_kpi">
                  <p>Channel optimization:</p>
                  <progress id="file" value="32" max="100"> 32% </progress>
                  <span>235</span>
                  <BsArrowRightShort />
                </div>
                <div className="product_kpi">
                  <p>Band Steering:</p>
                  <progress id="file" value="32" max="100"> 32% </progress>
                  <span>235</span>
                  <BsArrowRightShort />
                </div>
                <div className="product_kpi">
                  <p>Managed Wifi:</p>
                  <progress id="file" value="32" max="100"> 32% </progress>
                  <span>235</span>
                  <BsArrowRightShort />
                </div>
              </div>
            </div>
            <div className="product p2">
              <div className="pr_n">
                <p>MV1 Arris</p>
                <span>271 <FiAlertTriangle /></span>
              </div>
              <div className="feature">
                <span><p>Features</p><AiOutlineInfoCircle /></span>
                <div className="product_kpi">
                  <p>Channel optimization:</p>
                  <progress id="file" value="32" max="100"> 32% </progress>
                  <span>235</span>
                  <BsArrowRightShort />
                </div>
                <div className="product_kpi">
                  <p>Band Steering:</p>
                  <progress id="file" value="32" max="100"> 32% </progress>
                  <span>235</span>
                  <BsArrowRightShort />
                </div>
                <div className="product_kpi">
                  <p>Managed Wifi:</p>
                  <progress id="file" value="32" max="100"> 32% </progress>
                  <span>235</span>
                  <BsArrowRightShort />
                </div>
              </div>
            </div>
            <div className="product p3">
              <div className="pr_n">
                <p>MV2 Arris</p>
                <span>271 <FiAlertTriangle /></span>
              </div>
              <div className="feature">
                <span><p>Features</p><AiOutlineInfoCircle /></span>
                <div className="product_kpi">
                  <p>Channel optimization:</p>
                  <progress id="file" value="32" max="100"> 32% </progress>
                  <span>235</span>
                  <BsArrowRightShort />
                </div>
                <div className="product_kpi">
                  <p>Band Steering:</p>
                  <progress id="file" value="32" max="100"> 32% </progress>
                  <span>235</span>
                  <BsArrowRightShort />
                </div>
                <div className="product_kpi">
                  <p>Managed Wifi:</p>
                  <progress id="file" value="32" max="100"> 32% </progress>
                  <span>235</span>
                  <BsArrowRightShort />
                </div>
              </div>
            </div>
            {/* <div className="product p4"></div> */}
            <div className="viewall">
              <Link to='product-list'>
                <IoIosArrowDropright />
                <p>See all</p>
              </Link>
            </div>
            {/* <div className="viewall"></div> */}
          </div>
          {/* 5 */}
          <div className="country_specific_data">
            <div className="country_name ie"><p>IE</p>
            <p>48</p></div>
            <div className="product p1">
              <div className="pr_n">
                <p>MV1 Compal</p>
                <span>271 <FiAlertTriangle /></span>
              </div>
              <div className="feature">
                <span><p>Features</p><AiOutlineInfoCircle /></span>
                <div className="product_kpi">
                  <p>Channel optimization:</p>
                  <progress id="file" value="32" max="100"> 32% </progress>
                  <span>235</span>
                  <BsArrowRightShort />
                </div>
                <div className="product_kpi">
                  <p>Band Steering:</p>
                  <progress id="file" value="32" max="100"> 32% </progress>
                  <span>235</span>
                  <BsArrowRightShort />
                </div>
                <div className="product_kpi">
                  <p>Managed Wifi:</p>
                  <progress id="file" value="32" max="100"> 32% </progress>
                  <span>235</span>
                  <BsArrowRightShort />
                </div>
              </div>
            </div>
            <div className="product p2">
              <div className="pr_n">
                <p>MV1 Arris</p>
                <span>271 <FiAlertTriangle /></span>
              </div>
              <div className="feature">
                <span><p>Features</p><AiOutlineInfoCircle /></span>
                <div className="product_kpi">
                  <p>Channel optimization:</p>
                  <progress id="file" value="32" max="100"> 32% </progress>
                  <span>235</span>
                  <BsArrowRightShort />
                </div>
                <div className="product_kpi">
                  <p>Band Steering:</p>
                  <progress id="file" value="32" max="100"> 32% </progress>
                  <span>235</span>
                  <BsArrowRightShort />
                </div>
                <div className="product_kpi">
                  <p>Managed Wifi:</p>
                  <progress id="file" value="32" max="100"> 32% </progress>
                  <span>235</span>
                  <BsArrowRightShort />
                </div>
              </div>
            </div>
            <div className="product p3">
              <div className="pr_n">
                <p>MV2 Arris</p>
                <span>271 <FiAlertTriangle /></span>
              </div>
              <div className="feature">
                <span><p>Features</p><AiOutlineInfoCircle /></span>
                <div className="product_kpi">
                  <p>Channel optimization:</p>
                  <progress id="file" value="32" max="100"> 32% </progress>
                  <span>235</span>
                  <BsArrowRightShort />
                </div>
                <div className="product_kpi">
                  <p>Band Steering:</p>
                  <progress id="file" value="32" max="100"> 32% </progress>
                  <span>235</span>
                  <BsArrowRightShort />
                </div>
                <div className="product_kpi">
                  <p>Managed Wifi:</p>
                  <progress id="file" value="32" max="100"> 32% </progress>
                  <span>235</span>
                  <BsArrowRightShort />
                </div>
              </div>
            </div>
            {/* <div className="product p4"></div> */}
            <div className="viewall">
              <Link to='product-list'>
                <IoIosArrowDropright />
                <p>See all</p>
              </Link>
            </div>
            {/* <div className="viewall"></div> */}
          </div>
        </div>
        <Outlet />
    </div>
  )
}

export default PlumeIndex