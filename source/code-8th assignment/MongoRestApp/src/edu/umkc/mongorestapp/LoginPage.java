import java.io.IOException;

import javax.*;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.swing.JOptionPane;

import com.mongodb.BasicDBObject;
import com.mongodb.DB;
import com.mongodb.DBCollection;
import com.mongodb.DBCursor;
import com.mongodb.DBObject;
import com.mongodb.MongoClient;
import com.mongodb.MongoClientURI;
import com.mongodb.WriteResult;
import com.mongodb.gridfs.CLI;
import com.mongodb.util.JSON;

@WebServlet("/LoginPage")
public class LoginPage extends HttpServlet {

    public LoginPage() {
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
    	try
    	{
	    	String username = request.getParameter("username");
	    	String password=request.getParameter("password");
	    	
	    	
	    	BasicDBObject dbObject = new BasicDBObject();
	    	
	    	dbObject.put("Username", Username);
	    	dbObject.put("Password", Password);
	    	
			System.out.println(dbObject);
			MongoClientURI uri=new MongoClientURI("");	
			MongoClient client=new MongoClient(uri);
			DB db=client.getDB(uri.getDatabase());
			DBCollection asedemo=db.getCollection("asedemo");
			
			WriteResult result=details.add(dbObject);
			
			
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