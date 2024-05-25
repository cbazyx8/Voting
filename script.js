// JavaScript for animation and interactivity
$(document).ready(function() {
    let totalVotes = 0;
    let candidate1Votes = 0;
    let candidate2Votes = 0;
  
    $('#voteBtn').click(function() {
      let selectedCandidate = $('input[name="vote"]:checked').val();
      if (selectedCandidate === 'candidate1') {
        candidate1Votes++;
      } else if (selectedCandidate === 'candidate2') {
        candidate2Votes++;
      }
      totalVotes++;
  
      updateVoteCount();
      checkWinner();
    });
  
    function updateVoteCount() {
      $('#totalVotes').text(totalVotes);
      $('#candidate1Votes').text(candidate1Votes);
      $('#candidate2Votes').text(candidate2Votes);
      $('#candidate1Percentage').text(((candidate1Votes / totalVotes) * 100).toFixed(2) + '%');
      $('#candidate2Percentage').text(((candidate2Votes / totalVotes) * 100).toFixed(2) + '%');
    }
  
    function checkWinner() {
      if (candidate1Votes > candidate2Votes) {
        $('#winner').text('Saif Ullah  is the winner!');
      } else if (candidate2Votes > candidate1Votes) {
        $('#winner').text('Waqar Afridi is the winner!');
      } else {
        $('#winner').text('It\'s a tie!');
      }
    }
  });
  