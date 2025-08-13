export default function HelpPage(){
  return (
    <main style={{ padding: '60px 100px' }}>
      <div style={{ marginBottom: '40px' }}>
        <h2 style={{ 
          fontSize: '28px', 
          fontWeight: 'bold', 
          color: '#1f2937',
          marginBottom: '10px'
        }}>
          📖 观看帮助
        </h2>
        <p style={{ color: '#6b7280', fontSize: '16px' }}>
          如何使用 SproutBridge 观看课程资源
        </p>
      </div>

      {/* 观看步骤 */}
      <div style={{
        backgroundColor: 'white',
        borderRadius: '12px',
        padding: '30px',
        marginBottom: '30px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        border: '1px solid #e5e7eb'
      }}>
        <h3 style={{ 
          fontSize: '20px', 
          fontWeight: 'bold', 
          color: '#1f2937',
          marginBottom: '20px',
          display: 'flex',
          alignItems: 'center'
        }}>
          🎯 观看步骤
        </h3>
        <ol style={{ 
          paddingLeft: '20px',
          lineHeight: '1.8',
          color: '#374151'
        }}>
          <li style={{ marginBottom: '10px' }}>
            <strong>点击课程页的"去百度网盘观看"</strong>按钮
          </li>
          <li style={{ marginBottom: '10px' }}>
            若弹出提取码提示，<strong>提取码已自动复制</strong>；在打开的页面/网盘App中粘贴即可
          </li>
          <li style={{ marginBottom: '10px' }}>
            弱网情况下，建议先在网盘中<strong>"保存到网盘/离线下载"</strong>，再回看更流畅
          </li>
        </ol>
      </div>

      {/* 技术支持 */}
      <div style={{
        backgroundColor: '#f0f9ff',
        borderRadius: '12px',
        padding: '30px',
        border: '1px solid #0ea5e9'
      }}>
        <h3 style={{ 
          fontSize: '20px', 
          fontWeight: 'bold', 
          color: '#0369a1',
          marginBottom: '20px',
          display: 'flex',
          alignItems: 'center'
        }}>
          💬 技术支持与联系方式
        </h3>
        
        <div style={{
          display: 'flex',
          alignItems: 'center',
          padding: '15px',
          backgroundColor: 'white',
          borderRadius: '8px',
          marginBottom: '15px',
          border: '1px solid #bae6fd'
        }}>
          <span style={{
            fontSize: '24px',
            marginRight: '15px'
          }}>💬</span>
          <div>
            <p style={{ 
              margin: '0 0 5px 0', 
              fontWeight: 'bold',
              color: '#0369a1'
            }}>
              微信联系
            </p>
            <p style={{ 
              margin: 0, 
              color: '#374151',
              fontSize: '16px',
              fontFamily: 'monospace',
              backgroundColor: '#f1f5f9',
              padding: '4px 8px',
              borderRadius: '4px',
              display: 'inline-block'
            }}>
              t2970124252
            </p>
          </div>
        </div>

        <div style={{
          padding: '15px',
          backgroundColor: '#fef3c7',
          borderRadius: '8px',
          border: '1px solid #fbbf24'
        }}>
          <p style={{ 
            margin: 0, 
            color: '#92400e',
            fontSize: '14px',
            lineHeight: '1.5'
          }}>
            ⚡ <strong>遇到问题？</strong><br/>
            • 课程无法播放或提取码失效<br/>
            • 网站使用问题或功能建议<br/>
            • 课程内容相关咨询<br/>
            <br/>
            欢迎添加微信获得及时帮助！
          </p>
        </div>
      </div>

      {/* 常见问题 */}
      <div style={{
        marginTop: '30px',
        backgroundColor: 'white',
        borderRadius: '12px',
        padding: '30px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        border: '1px solid #e5e7eb'
      }}>
        <h3 style={{ 
          fontSize: '20px', 
          fontWeight: 'bold', 
          color: '#1f2937',
          marginBottom: '20px'
        }}>
          ❓ 常见问题
        </h3>
        
        <div style={{ marginBottom: '20px' }}>
          <h4 style={{ 
            color: '#374151', 
            fontWeight: 'bold',
            marginBottom: '8px'
          }}>
            Q: 提取码在哪里？
          </h4>
          <p style={{ 
            color: '#6b7280',
            margin: 0,
            paddingLeft: '15px'
          }}>
            A: 点击"去百度网盘观看"按钮时，提取码会自动复制到剪贴板，直接粘贴即可。
          </p>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <h4 style={{ 
            color: '#374151', 
            fontWeight: 'bold',
            marginBottom: '8px'
          }}>
            Q: 视频播放卡顿怎么办？
          </h4>
          <p style={{ 
            color: '#6b7280',
            margin: 0,
            paddingLeft: '15px'
          }}>
            A: 建议先将视频保存到自己的百度网盘，然后使用网盘的离线下载功能，这样观看更流畅。
          </p>
        </div>

        <div>
          <h4 style={{ 
            color: '#374151', 
            fontWeight: 'bold',
            marginBottom: '8px'
          }}>
            Q: 课程适合什么年龄段？
          </h4>
          <p style={{ 
            color: '#6b7280',
            margin: 0,
            paddingLeft: '15px'
          }}>
            A: 主要面向3-12岁儿童，涵盖数学启蒙、英语发音、汉语发音等多个领域的启蒙教育。
          </p>
        </div>
      </div>
    </main>
  );
}
