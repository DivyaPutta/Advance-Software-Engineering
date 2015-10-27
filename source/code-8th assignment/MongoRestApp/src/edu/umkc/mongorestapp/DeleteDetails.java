import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.swing.JOptionPane;

import com.mongodb.BasicDBObject;
import com.mongodb.DB;
import com.mongodb.DBCollection;
import com.mongodb.MongoClient;
import com.mongodb.MongoClientURI;

/**
 * Servlet implementation class DeleteStock
 */
@WebServlet("/DeleteDetails")
public class DeleteDetails extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public DeleteDetails() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		MongoClientURI uri=new MongoClientURI("mongodb://admin:admin@ds035014.mongolab.com:35014/asedemo");	
		MongoClient client=new MongoClient(uri);
		
		try {
			
		DB db=client.getDB(uri.getDatabase());
		DBCollection asedemo=db.getCollection("asedemo");
		
		BasicDBObject delete = new BasicDBObject("username", request.getParameter("username"));
        asedemo.remove(delete);
        
        response.sendRedirect("HomePage.html");
		doGet(request, response);
		}
		catch(Exception e)
		{
			System.out.println(e);
		}
		finally {
			client.close();
		}
		
		doGet(request, response);
	}

}