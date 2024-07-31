<%@page import="kosa.dao.BoardDao"%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<%
	request.setCharacterEncoding("utf-8");
%>
<jsp:useBean id="board" class="kosa.model.Board"></jsp:useBean> <!-- Board board = new Board() -->
<jsp:setProperty property="*" name="board" /> <!--  board.setTitle(request.getParameter("title") ... -->

<%
	BoardDao dao = BoardDao.getInstance();
	int re = dao.insert(board);
	
	if(re == 1){
		response.sendRedirect("/JSP/board/list.jsp");
		out.println("성공");
	}else{
		out.println("실패");
	}
%>  

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>

</body>
</html>