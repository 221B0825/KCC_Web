package kosa.servlet;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/SignInServlet")
public class SignInServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
  
    public SignInServlet() {
        super();
  
    }

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	
		request.setCharacterEncoding("utf-8");
		
		String name = request.getParameter("name");
		String email = request.getParameter("email");
		String age = request.getParameter("age");
		String phoneNumber = request.getParameter("phoneNumber");
	
	
		request.setAttribute("name", name);
		request.setAttribute("email", email);
		request.setAttribute("age", age);
		request.setAttribute("phoneNumber", phoneNumber);
		
		RequestDispatcher re = request.getRequestDispatcher("/signInHistory.jsp");
		re.forward(request, response);
	}

}
