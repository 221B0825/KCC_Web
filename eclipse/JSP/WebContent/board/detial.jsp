<%@page import="kosa.dao.BoardDao2"%>
<%@page import="kosa.model.Board"%>
<%@page import="kosa.dao.BoardDao"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
	int seq = Integer.parseInt(request.getParameter("seq"));
	BoardDao2 dao = BoardDao2.getInstance();
	Board board = dao.detailBoard(seq);
	
%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<h2>글세부보기</h2>
	<ul>
		<li><%=board.getSeq() %></li>
		<li><%=board.getTitle() %></li>
		<li><%=board.getWriter() %></li>
		<li><%=board.getContents() %></li>
	</ul>
</body>
</html>