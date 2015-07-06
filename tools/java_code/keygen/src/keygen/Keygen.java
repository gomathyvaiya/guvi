package keygen;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.util.ArrayList;

public class Keygen 
{
	private static FileWriter fw;
	private static PrintWriter pw;
	
	private static void readPlayListNamesFromFile(File fileName) throws IOException
	{
		BufferedReader br = null;
		String line = null;
		
		File file = new File(""+fileName+"");

		try 
		{
			br  = new BufferedReader(new InputStreamReader(new FileInputStream(file)));
			ArrayList<String> allPlaylistNames = new ArrayList<String>();
			allPlaylistNames.add(fileName.getName());
			//allPlaylistNames.add(fileName.getName());
			while((line = br.readLine())!=null)
			{
				
                            String words1[] = line.split("v=");		
                            
                            String words[] = line.split("\">");
			
                            String heading[] = line.split("<h3>");	
                            if(heading.length>1){
                                	String tutorialTitle[] = heading[1].split("</h3>");
                                allPlaylistNames.add(tutorialTitle[0]);
                            }
				if( words1.length>1 && words.length>1  )
				{
                                    String tutorialKeys[] = words1[1].split("\"");
					String tutorialNames[] = words[1].split("</a>");
					System.out.println(tutorialNames[0]);
					allPlaylistNames.add(tutorialNames[0]);	
                                    System.out.println(tutorialKeys[0]);
                                        allPlaylistNames.add(tutorialKeys[0]);	
				}
			}
			writeToTextFile(allPlaylistNames);
		} 
		catch (FileNotFoundException e) 
		{
			e.printStackTrace();
		}
		br.close();
		br = null;
	}
	
	private static void writeToTextFile(ArrayList<String> allPlaylistNames) throws IOException 
	{
		pw = createTextFile(allPlaylistNames);
		
		for(int k = 1; k < allPlaylistNames.size(); k++)
		{
			pw.print(allPlaylistNames.get(k));
			pw.print("\n");
		}
		
		//Flush the output to the file
        pw.flush();
        
        //Close the Print Writer
        pw.close();
        
        //Close the File Writer
        fw.close();
        
	}

	private static PrintWriter createTextFile(ArrayList<String> allPlaylistNames) throws IOException 
	{
		String fileName=allPlaylistNames.get(0);
		File file = new File("ResultsFolder");
		
		if (!file.exists()) 
		{
			file.mkdir();
		}
		
		fw = new FileWriter("ResultsFolder/"+fileName);
		
		PrintWriter pw = new PrintWriter(fw);
		return pw;
	}

	private static void readFileFromFolder() throws IOException
	{
		File folder = new File("Playlists");
		File[] listOfFiles = folder.listFiles();

		for (int i = 0; i < listOfFiles.length; i++) 
		{
		  if (listOfFiles[i].isFile()) 
		  {
			System.out.println("File " + listOfFiles[i].getName());
		  } 
		  else if (listOfFiles[i].isDirectory()) 
		  {
			System.out.println("Directory " + listOfFiles[i].getName());
		  }
		  readPlayListNamesFromFile(listOfFiles[i]);
		}		
	}
	/**
	 * @param args
	 */
	public static void main(String[] args) 
	{
		try 
		{
			readFileFromFolder();
		} 
		catch (IOException e) 
		{
			e.printStackTrace();
		}
	}
}
