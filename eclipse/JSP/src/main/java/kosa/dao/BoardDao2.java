package kosa.dao;

import java.io.InputStream;
import java.util.List;

import kosa.mapper.BoardMapper;
import kosa.model.Board;

// using MyBatis
public class BoardDao2 {
	private static BoardDao2 dao = new BoardDao2();

	public static BoardDao2 getInstance() {
		return dao;
	}

	public SqlSessionFactory getSqlSessionFactory() {
		// mybatis-config.xml => SqlSessionFactory
		String resource = "mybatis-config.xml";
		InputStream in = null;

		try {
			in = Resource.getResourceAsStream(resource);
		} catch (Exception e) {
			// TODO: handle exception
		}

		return new SqlSessionFactoryBuilder().build(in);
	}

	public List<Board> listBoard() {
		SqlSession sqlSession = getSqlSessionFactory().openSession();
		List<Board> list = null;

		try {
			list = sqlSession.getMapper(BoardMapper.class).listBoard();
//			list = sqlSession.selectList("kosa.mapper.BoardMapper.listBoard");
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			if (sqlSession != null) {
				sqlSession.close();
			}
		}

		return list;
	}

	public Board detailBoard(int seq) {
		SqlSession sqlSession = getSqlSessionFactory().openSession();
		Board board = null;

		try {
			board = sqlSession.getMapper(BoardMapper.class).detailBoard(seq);
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			if (sqlSession != null) {
				sqlSession.close();
			}
		}

		return board;
	}
}
