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
import com.mongodb.WriteResult;

/**
 * Servlet implementation class HomePage
 */
@WebServlet("/HomePage")
public class HomePage extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public LoginPage() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException 
	{
	try
	{
    	String username = request.getParameter("username");
    	String password=request.getParameter("password");
    	
    	
    	BasicDBObject dbObject = new BasicDBObject();
    	dbObject.put("username", username);
    	dbObject.put("password", password);
    	
    	
		System.out.println(dbObject);
		MongoClientURI uri=new MongoClientURI(" mongodb://admin:admin@ds035014.mongolab.com:35014/asedemo");	
		MongoClient client=new MongoClient(uri);
		DB db=client.getDB(uri.getDatabase());
		DBCollection asedemo=db.getCollection("asedemo");
		
		WriteResult result=asedemo.insert(dbObject);
		
		//JOptionPane.showMessageDialog(null, "The given details are entered into MongoLab");
		
		response.sendRedirect("HomePage.html");
	}
    	catch(Exception e)
    	{
    		System.out.println(e);
    	}
	
}

	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}