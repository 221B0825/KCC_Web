package kosa.dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;

import kosa.model.Board;

public class BoardDao {
	
	private static BoardDao dao = new BoardDao();
	
	public static BoardDao getInstance() {
		return dao;
	}
	
	// JNDI 기술을 이용해서 DBCP 구현
	// DataSource 객체 (Connection Pool) => JNDI 이름으로 jdbc/oracle이라는 이름으로 사용
	
	public int insert(Board board) {
		Connection conn = null;
		PreparedStatement pstmt = null;
		//System.out.println(board.toString());
		
		// url, user, password -> 오라클이 1521포트 사용, XE 버전임
		String url = "jdbc:oracle:thin:@localhost:1521:XE";
		String user = "kcc";
		String password = "1234";
		int re = -1;
		
		String sql = "insert into board values(board_seq.nextval,?,?,?,sysdate,0)";
		
		try {
			// 1. JDBC 드라이버 로딩
			Class.forName("oracle.jdbc.driver.OracleDriver");
			
			// 2. DB 연결 (Connection 객체 생성 유무)
			conn = DriverManager.getConnection(url, user, password);
//			System.out.println("conn: "+conn);
		
			
			// 3. PrepareStatement 객체 생성(SQL 질의)
			pstmt = conn.prepareStatement(sql);
			pstmt.setString(1, board.getTitle());
			pstmt.setString(2, board.getWriter());
			pstmt.setString(3, board.getContents());
			
			// 4. SQL 실행(insert, update, delete => executeUpdate() => 정수(로우 개수)
			re = pstmt.executeUpdate();
			
			
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			if(pstmt != null) {
				try {
					pstmt.close();
				} catch (Exception e2) {
					// TODO: handle exception
				}
			}
			
			if(conn != null) {
				try {
					conn.close();
				} catch (Exception e2) {
					// TODO: handle exception
				}
			}
		}
		
		return re;
	}
}
